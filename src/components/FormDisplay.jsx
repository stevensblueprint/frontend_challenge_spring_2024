export default function FormDisplay({ formData }) {
    return (
        <div className='form-display-container'>
            <div className='form-display-item'>
                <p className='form-display-header'>Name</p>
                <p className='form-display-content'>{ formData.name }</p>
            </div>
            <div className='form-display-item'>
                <p className='form-display-header'>Email</p>
                <p className='form-display-content'>{ formData.email }</p>
            </div>
            <div className='form-display-item'>
                <p className='form-display-header'>Graduation Year</p>
                <p className='form-display-content'>{ formData.year }</p>
            </div>
        </div>
    )
}