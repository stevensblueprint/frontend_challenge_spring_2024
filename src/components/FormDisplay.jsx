export default function FormDisplay({ formData }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Graduation Year</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>{ formData.name }</td>
                    <td>{ formData.email }</td>
                    <td>{ formData.year }</td>
                </tr>
            </tbody>
        </table>
    )
}