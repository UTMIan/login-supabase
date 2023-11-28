import { useAuth } from "../providers/AuthProvider";

function Navbar(){
    const { signOut } = useAuth();
    return(
        <div>
            <button onClick={SignOut}>SignOut</button>
        </div>
    )
}

export default Navbar