import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './form.scss';
import { waitForDomChange } from '@testing-library/dom';

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
    const [invalid, setInvalid] = useState<string>('');

    useEffect(() => {
        
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (uName && pWord && pWordCompare) {
            if (pWord === pWordCompare) {
                alert('Success!');
                setInvalid('');
            } else {
                alert('Your password does not match verification');  
                setInvalid('p-invalid');
            }
        } else {
            alert('Please fill out all fields');
        }
        e.preventDefault();    
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <FormTitle />
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="uname" className="p-d-block">First Name</label>
                <InputText id="uname" name='userName' value={uName}  onChange={(e: ChangeEvent<HTMLInputElement>) => setUName(e.target.value)} onBlur={(e: ChangeEvent<HTMLInputElement>) => setUName(e.target.value)}/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pword" className="p-d-block">Password</label>
                <Password id="pword" className={invalid} name='password' value={pWord} onChange={(e: ChangeEvent<HTMLInputElement>) => setPWord(e.target.value)} onBlur={(e: ChangeEvent<HTMLInputElement>) => setPWord(e.target.value)} toggleMask/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pWordCompare" className="p-d-block">Verify Password</label>
                <Password id="pWordCompare" className={invalid} name='password' value={pWordCompare} onChange={(e: ChangeEvent<HTMLInputElement>) => setPWordCompare(e.target.value)} onBlur={(e: ChangeEvent<HTMLInputElement>) => setPWordCompare(e.target.value)} toggleMask/>
            </div>
            <div className="p-field p-text-right p-grid p-dir-col">                     
                <Submit />
            </div>                
        </form> 
    );
}

export default UserForm;