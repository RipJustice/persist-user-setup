import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './form.scss';

const FormTitle = () => {
    return <h1>Create User</h1>;
}  

const Submit = () => {
    return (
        <div className="buttonContainer">
            <Button label="Submit" />
        </div>
    );
}

function UserForm() {
    const [uName, setUName] = useState<string>();
    const [pWord, setPWord] = useState<string>();
    const [pWordCompare, setPWordCompare] = useState<string>();

    useEffect(() => {
        
    }, []);

    return (
        <form className="Form">
            <FormTitle />
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="uname" className="p-d-block">First Name</label>
                <InputText id="uname" className={uName ? 'p-invalid' : ''} name='userName' value={uName}  onChange={} onBlur={}/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pword" className="p-d-block">Password</label>
                <Password id="pword" className={pWord ? 'p-invalid' : ''} name='password' value={pWord} onChange={} onBlur={} toggleMask/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pWordCompare" className="p-d-block">Password</label>
                <Password id="pWordCompare" className={pWordCompare ? 'p-invalid' : ''} name='password' value={pWord} onChange={} onBlur={} toggleMask/>
            </div>
            <div className="p-field p-text-right p-grid p-dir-col">                     
                <Submit />
            </div>                
        </form> 
    );
}

export default UserForm;