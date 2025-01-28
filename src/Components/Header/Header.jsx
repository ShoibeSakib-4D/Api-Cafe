import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        
             <div className="p-5 flex justify-between mx-5 border-b-2">
                <h1 className=' font-exo700 text-5xl'>knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        
    );
};

export default Header;