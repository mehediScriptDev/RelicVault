import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllArtifacts } from './pages/AllArtifacts';
import { ArtifactDetails } from './pages/ArtifactDetails';
import { AddArtifact } from './pages/AddArtifact';
import { MyArtifacts } from './pages/MyArtifacts';
import { LikedArtifacts } from './pages/LikedArtifacts';
import { UpdateArtifact } from './pages/UpdateArtifact';
import { NotFound } from './pages/NotFound';

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/artifacts" element={<AllArtifacts />} />
          
          {/* Protected Routes */}
          <Route
            path="/artifact/:id"
            element={
              <ProtectedRoute>
                <ArtifactDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-artifact"
            element={
              <ProtectedRoute>
                <AddArtifact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-artifacts"
            element={
              <ProtectedRoute>
                <MyArtifacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/liked-artifacts"
            element={
              <ProtectedRoute>
                <LikedArtifacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-artifact/:id"
            element={
              <ProtectedRoute>
                <UpdateArtifact />
              </ProtectedRoute>
            }
          />
          
          {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
