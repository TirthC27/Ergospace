import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Model/model"; // Assuming you have a Model component
import { useNavigate } from "react-router-dom";
import { TorusKnotGeometry } from "three";

function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userType: "user"
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
  
    try {
      let url = isLogin
        ? 'http://127.0.0.1:8000/auth/login/'
        : 'http://127.0.0.1:8000/auth/register/';
  
      let bodyData = {};
  
      if (isLogin) {
        bodyData = {
          email: formData.email,
          password: formData.password,
        };
      } else {
        if (formData.password !== formData.confirmPassword) {
          setErrors({ register: "Passwords do not match." });
          setLoading(false);
          return;
        }
        bodyData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          user_type: formData.userType === 'admin' ? 'provider' : 'customer'
        };
      }
  
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify(bodyData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('✅ Auth successful:', data);
      
        const userObject = {
          id: data.user.id,
          full_name: data.user.full_name,
          email: data.user.email,
          user_type: data.user.user_type,
          token: data.token,  // ✅ Now token will be present
        };
      
        localStorage.setItem('user', JSON.stringify(userObject));
      
        if (data.user.user_type === 'provider' || formData.userType === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      }
       else {
        setErrors({ login: data.detail || 'Invalid credentials.' });
      }
    } catch (error) {
      console.error('❌ Auth error:', error);
      setErrors({ login: 'Something went wrong. Try again.' });
    } finally {
      setLoading(false);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (e) => {
    setFormData(prev => ({ ...prev, userType: e.target.value }));
  };

  return (
    <div className="bg-[#3f2a14] flex flex-col items-center justify-center h-screen">
      <div className="h-[90vh] w-auto flex bg-[#FAF7F0] justify-center items-center pr-5 rounded-[20px] gap-5">
        <div className="flex flex-col font-[1000]">
          <div className="flex justify-start ml-[15px] flex-col mt-0 mb-0">
            <h1 className="text-3xl">ERGO-SPACE</h1>
            <h4 className="text-[rgb(79,79,79)] flex flex-col mt-0 mb-0">
              Join us to book and work from the best offices and cafés near you.
            </h4>
          </div>
          <div className="h-[36pc] w-[50pc]">
            <Canvas className="w-full h-full rounded-[12px] overflow-hidden" camera={{ position: [0, 2, 5] }}>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 2, 5]} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="bg-white h-[90%] w-[30pc] rounded-[20px] p-5 flex flex-col justify-center border border-[rgba(0,0,0,0.1)] items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="relative flex-col w-full h-[90%] flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold mb-2">{isLogin ? "Login" : "Register"}</h1>
              {errors.login && <p className="text-red-500">{errors.login}</p>}
              {errors.register && <p className="text-red-500">{errors.register}</p>}

              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleUserTypeChange}
                    className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="user">Workspace Worker</option>
                    <option value="admin">Workspace Manager</option>
                  </select>
                </>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {!isLogin && (
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-[2.2pc] w-[70%] py-[5px] px-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 active:scale-95 font-bold transition-all"
              >
                {loading ? (isLogin ? 'Logging in...' : 'Creating Account...') : isLogin ? "Login" : "Register"}
              </button>
            </form>

            <div className="flex flex-col justify-center items-center mt-5">
              <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
