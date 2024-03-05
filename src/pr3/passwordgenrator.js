import {useState , useCallback , useEffect} from 'react'
function PasswordGenrator(){

    const [length , setlength] = useState(8)
    const [numberAllowed , setnumberAllowed] = useState(false);
    const [charectorAllowed , setcharectorAllowed] = useState(false);
    const [password , setPassword] = useState("");

    const  PasswordGenrator = useCallback( ()=>{

        let Pass =''
        let str = 'abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'

        if(numberAllowed) str += '0123456789'
        if(charectorAllowed) str += '!~@#$%^&*()+_}{><"?:`'


        for (let i = 1 ; i<length; i++) {
            let char = Math.floor(Math.random() *str.length+1)
            Pass += str.charAt(char)
        }
        setPassword(Pass)





    }, [length , numberAllowed , charectorAllowed , setPassword])

    useEffect( ()=>{} , [length , numberAllowed , charectorAllowed , PasswordGenrator])


    return(
        <div>
            <h1>Password Genrator Project</h1>

            <div>
                <input 
                type='text' 
                value={password}>
                placeholder="Password"
                </input>

                <button>copy</button>
            </div>

            <div> 
                <input 
                type='range'
                min={6}
                max={64}
                value={length}
                className='coursor-pointer'
                onChange={(e)=>{setlength(e.target.value)}}
                
                />
                <label>length {length}</label>
    
            </div>
            <div> 
                <input 
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{setnumberAllowed((prev) => !prev)}}
                
                />  
                <label htmlFor='numberinput'>Numbers</label>  
            </div>
            <div> 
                <input 
                type='checkbox'
                defaultChecked={charectorAllowed}
                id='charectorinput'
                onChange={()=>{setcharectorAllowed((prev) => !prev)}}
                
                />    
                <label htmlFor='characterinput'>character</label>
            </div>
        
        
        </div>
    );
};

export default PasswordGenrator;