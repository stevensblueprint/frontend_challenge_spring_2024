/**
 * 
 * @param {int} from - Starting year
 * @param {int} to - Ending year (should be bigger than <from>)
 * @returns Array of div blocks for each year option
 */
function getYears(from, to) {
    const fields = [];

    while(from <= to) {
        const id = "form-grad-y" + from;
        fields.push(
            <div className='form-inner-item' key={from}>
                <input id={id} type="radio" name="form-grad" value={from}/>
                <label htmlFor={id}> {from++} </label>
            </div>
        );
    }

    return fields
}

export default function BlueForm({ setFormData }) {

    const pushData = (ev) => {
        ev.preventDefault();    // This is to stop default redirect
        console.log(ev.target["form-name"].value, ev.target["form-email"].value, ev.target["form-grad"].value)
        setFormData(st => ({
            ...st,
            name: ev.target["form-name"].value, 
            email: ev.target["form-email"].value, 
            year: ev.target["form-grad"].value
        }));
    }

    return (
        <form className='form-inner-container' onSubmit={pushData}>
            <div className='form-inner-section'>
                <label className='form-inner-header' htmlFor="form-name">Name</label><br/>
                <input id="form-name" className='form-inner-textbox' 
                    type="text" name="form-name" placeholder="Enter your full name"
                    />
            </div>
            
            <div className='form-inner-section'>
                <label className='form-inner-header' htmlFor="form-email">Email</label><br/>
                <input id="form-email" className='form-inner-textbox' 
                    type="text" name="form-email" placeholder="Enter your Stevens email"
                    />
            </div>

            <div className='form-inner-section'>
                <label className='form-inner-header' htmlFor="form-grad">Graduation Year</label><br/>
                <div htmlFor="form-grad">
                    { getYears(2025, 2028) }
                </div>
            </div>
            
            <div className='form-inner-section'>
                <input className='form-inner-submit' type="submit" value="Submit"/>
            </div>
        </form>
    )
}