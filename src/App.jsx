import { Route } from 'react-router-dom'
import Login from './pages/Login'
import { AuthProvider } from './providers/AuthProvider';

function App(){
  return(
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
                } 
              />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;