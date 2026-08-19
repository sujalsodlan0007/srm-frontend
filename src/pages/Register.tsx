import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">Create Account</h1>
        <p className="text-gray-600 text-center mb-8">Join us today</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-accent font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
