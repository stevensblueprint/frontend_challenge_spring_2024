export default function FormDisplay({ formData }) {
    return (
        <div className=''>
            <div className=''>
                <p>Name</p>
                <p>{ formData.name }</p>
            </div>
            <div className=''>
                <p>Email</p>
                <p>{ formData.email }</p>
            </div>
            <div className=''>
                <p>Graduation Year</p>
                <p>{ formData.year }</p>
            </div>
        </div>
    )
}