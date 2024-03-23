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
            <div key={from}>
                <input id={id} type="radio" name="form-grad" value={from}/>
                <label htmlFor={id}> {from++} </label>
                <br/>
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
        <form onSubmit={pushData}>
            <div className="">
                <label className="" htmlFor="form-name">Name</label><br/>
                <input id="form-name" className="" 
                    type="text" name="form-name" placeholder="Enter your full name"
                    />
            </div>
            
            <div className="">
                <label className="" htmlFor="form-email">Email</label><br/>
                <input id="form-email" className="" 
                    type="text" name="form-email" placeholder="Enter your Stevens email"
                    />
            </div>

            <div className="">
                <label htmlFor="form-grad">Graduation Year</label><br/>
                <div htmlFor="form-grad">
                    { getYears(2025, 2028) }
                </div>
            </div>
            
            <input className="" type="submit" value="Submit"/>
        </form>
    )
}