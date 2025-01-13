import React from 'react'
import { AuthContext } from '../App'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


// This page will make the screen display profile informatiion (username etc.)
// furthermore it will contain a list of just the user's posts
// as a stretch goal, there will be a component in here to allow users to change their password
const ProfilePage = ({ auth }) => {

  // Fetch the user id from the url
  const { userId } = useParams();
  const [profileData, setProfileData]= useState(null);
  const [error, setError] = useState(null);

  // varible to store profile Id
  const userID = auth.user.user.id
  
//  currently using a fetch request/ update toe axios later
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`/profiles/${userID}`);
        setProfileData(res.data);
        s
        setProfile(JSONdata)
      
      } catch (error) {
        console.error('Error fetching User Profile', error);
      }
    }
  }, [userId])

  return (
    <div> 
      <div className='profileHeader'>
         <h1>{profileData.user.username} Profile</h1>
         <img src={profileData.profile_picture} alt={profileData.user.username} />
      </div>
      <div className='button container'>
          <button className='profileEidt' type='button'>Edit Profile</button>
          <button className='CreatePost' type='button'> Post a Blog</button>
      </div>
      <div className='profileBlogsContainer'>
        <h2>Your Articles</h2>
        {/* ternary incase no blog posts */}
        {BlogPosts && BlogPosts.length ? (
            // Map throug fi there is content
            BlogPosts.map((blog, idx) => {
              return (
                <div className='blogContainer' key={idx}>
                  <h5>{blog.title}</h5>
  
                </div>
                );
              })
              ) : (
                <p>
                  Looks like you haven't upload any Blogs
                </p>
              )}


      </div>
      
    </div>
  )
}

export default ProfilePage


// fetched data structure

// {
//   "profile": {
//       "id": 5,
//       "user": {
//           "username": "testuser4",
//           "email": "",
//           "first_name": "",
//           "last_name": ""
//       },
//       "dob": null,
//       "bio": null,
//       "profile_picture": null
//   },
//   "blogs": [
//       {
//           "id": 2,
//           "title": "test blog chicken duck",
//           "body_text": "vrebabrwtbqbverb",
//           "img_data": "/media/blogpost_images/quack_6fHjOCP.webp",
//           "created_at": "2025-01-13T15:40:22.733862Z",
//           "updated_at": "2025-01-13T15:40:22.733871Z",
//           "likes": 6,
//           "author": 10,
//           "tags": [
//               3,
//               4,
//               5
//           ]
//       }
//   ]
// }