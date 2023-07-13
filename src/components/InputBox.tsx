interface InputProps {
    type: string;
    id: string;
    name: string;
    title: string;
    subtitle?: string;
    placeholder?: string;
}


export function InputBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px] text-SystemGray2">
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px] text-SystemGray1 placeholder-SystemGray4 outline-grayScreen"
                placeholder={placeholder}
            />
        </div>
    );
}

export function SelectBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px]">
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px]"
                placeholder={placeholder}
            />
        </div>
    );

}

export function SelectInputBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px]">
            <div className="flex">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px]"
                placeholder={placeholder}
            />
        </div>
    );
}

export function RadioSelectBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px]">
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px]"
                placeholder={placeholder}
            />
        </div>
    );
}

export function SearchBox({ 
    type, 
    id, 
    name, 
    title,
    subtitle,
    placeholder
 } : InputProps) {
    return (
        <div className="flex flex-col w-4/5 text-[16px]">
            <div className="flex ">
                <label htmlFor={name}>{title}</label>
                <div>{subtitle}</div>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                className="rounded-xl h-[60px] mt-[10px] pl-[14px]"
                placeholder={placeholder}
            />
        </div>
    );
}