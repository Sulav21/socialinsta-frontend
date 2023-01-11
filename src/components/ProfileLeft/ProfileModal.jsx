import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

export const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Details</h3>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="infoInput"
          />
           <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
        <input
            type="text"
            name="worksAt"
            placeholder="Works at"
            className="infoInput"
          />  
        </div>
        <div>
        <input
            type="text"
            name="livesIn"
            placeholder="Lives in"
            className="infoInput"
          /> 
            <input
            type="text"
            name="country"
            placeholder="Country"
            className="infoInput"
          />   
        </div>
        <div>
        <input
            type="text"
            name="status"
            placeholder="Relationship Status"
            className="infoInput"
          /> 
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />

        </div>
        <button className="btn logout-btn" style={{alignSelf:"center"}}>Update</button>
      </form>
    </Modal>
  );
};
