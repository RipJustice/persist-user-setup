import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
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

interface userDefined {
    uName: string;
    pWord: string;
    pWordCompare: string;  
}

function UserForm() {
    // this could be session storage or redux as well, I simply interpreted persist as meaning persist to local
    const [user, setUser] = useState<userDefined>(
        (localStorage.getItem('user_store')) ? JSON.parse(localStorage.getItem('user_store') || '') :
        {uName: '', pWord: '', pWordCompare: ''}       
    );
    const [invalid, setInvalid] = useState<string>('');
    
    useEffect(() => {
        localStorage.setItem('user_store', JSON.stringify(user));
    }, [user]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (user.uName.trim() && user.pWord.trim() && user.pWordCompare.trim()) {
            if (user.pWord === user.pWordCompare) {
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
                <InputText id="uname" name='userName' value={user.uName}  onChange={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, uName: e.target.value}))} onBlur={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, uName: e.target.value}))}/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pword" className="p-d-block">Password</label>
                <Password id="pword" className={invalid} name='password' value={user.pWord} onChange={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, pWord: e.target.value}))} onBlur={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, pWord: e.target.value}))} toggleMask/>
            </div>
            <div className="p-field p-grid p-dir-col"> 
                <label htmlFor="pWordCompare" className="p-d-block">Confirm Password</label>
                <Password id="pWordCompare" className={invalid} name='password' value={user.pWordCompare} onChange={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, pWordCompare: e.target.value}))} onBlur={(e: ChangeEvent<HTMLInputElement>) => setUser((prevState: userDefined) => ({...prevState, pWordCompare: e.target.value}))} toggleMask/>
            </div>
            <div className="p-field p-text-right p-grid p-dir-col">                     
                <Submit />
            </div> 
        </form> 
    );
}

export default UserForm;