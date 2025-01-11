import React from 'react'
import { AuthContext } from '../App'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// This page will make the screen display profile informatiion (username etc.)
// furthermore it will contain a list of just the user's posts
// as a stretch goal, there will be a component in here to allow users to change their password
const ProfilePage = ({ auth }) => {

  const [profile, setProfile]= useState({ })
  const userID = auth.user._id

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        
      

      } catch (error) {
        
      }
    }
  })

  return (
    <div>
      
    </div>
  )
}

export default ProfilePage
