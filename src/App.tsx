import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  NavLinkProps,
  Link,
} from "react-router-dom";
import SleepTracker from "./features/sleep/SleepTracker";
import ExerciseTracker from "./features/exercise/ExerciseTracker";
import NutritionTracker from "./features/nutrition/NutritionTracker";
import StressTracker from "./features/stress/StressTracker";

const App = () => {
  return (
    <Router>
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-teal-300 transition-colors">
          HF Tracker
        </Link>
        <nav className="space-x-4">
          <StyledNavLink to="/sleep">Sleep</StyledNavLink>
          <StyledNavLink to="/exercise">Exercise</StyledNavLink>
          <StyledNavLink to="/nutrition">Nutrition</StyledNavLink>
          <StyledNavLink to="/stress">Stress</StyledNavLink>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sleep" element={<SleepTracker />} />
          <Route path="/exercise" element={<ExerciseTracker />} />
          <Route path="/nutrition" element={<NutritionTracker />} />
          <Route path="/stress" element={<StressTracker />} />
        </Routes>
      </main>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">HF Tracker</h2>
      <p className="mt-2">Select a category above to begin logging</p>
    </div>
  );
};

const StyledNavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? "text-yellow-300 underline" : "hover:text-yellow-300 transition-colors"
      }
    >
      {children}
    </NavLink>
  );
};

export default App;
