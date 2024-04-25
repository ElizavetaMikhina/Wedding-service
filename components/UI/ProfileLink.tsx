import React from 'react'
import Image from 'next/image';


interface ProfileLinkProps {
    profileName: string;
    profilePhoto: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ profileName, profilePhoto }) => {
    return (
        <div className="header__nav-profile">
            <a href="#" className="header__nav-link">
                <Image src={profilePhoto} alt={profileName} width={24} height={24} />
                <p>{profileName}</p>
            </a>
        </div>
    );
}
export default ProfileLink
