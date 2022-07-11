import React from 'react'
import EditPrimaryInfoPage from './EditPrimaryInfoPage'
import EditSecondaryInfoPage from './EditSecondaryInfo'
import EditEducationDetails from './EditEducationDetails';
import EditAddressDetails from './EditAddressDetails';
import EditBankDetails from './EditBankDetails';
import EditTechnicalDetails from './EditTechnicalDetails';
import EditExperienceDetails from './EditExperienceDetails';
import EditContactDetails from './EditContactDetails';

function EditEmployeeProfile() {
  return (
    <div>
        <EditPrimaryInfoPage/>
        <EditSecondaryInfoPage/>
        <EditEducationDetails/>
        <EditAddressDetails/>
        <EditBankDetails/>
        <EditTechnicalDetails/>
        <EditExperienceDetails/>
        <EditContactDetails/>
    </div>
  )
}

export default EditEmployeeProfile