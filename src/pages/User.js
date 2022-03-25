import { useNavigate } from "react-router-dom"
import useAuth from 'hooks/useAuth';

const User = () => {
    const navigate = useNavigate();
    const {auth} = useAuth();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>ID:{auth.user}</h1>
            <br />
            <p>For Admin, User</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default User
