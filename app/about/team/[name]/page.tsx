import React from 'react';

const TeamDetailsPage= async ({params}) => {
  const name = (await params).name;
  return (
    <div>
      TeamDetailsPage inside AboutPage  {name}
    </div>
  );
}

export default TeamDetailsPage;
