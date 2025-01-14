import React, { useState } from "react";
import f

const ProfileEdit = () => {

    
    
    const [profileData, setProflieData] = useState({
        dob: '',
        bio: '',
        profile_picture:
    })
    
    const handleProfileChange = (e) => {
        setProflieData({...profileData, [e.target.id]: e.target.value });
    };
    
    const handSubmit = async (e) => {
    
    }
    
    
    return (
        <div>
            <form action="">

            </form>
        </div>

    );
}

export default ProfileEdit