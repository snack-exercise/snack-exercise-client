'use client';

import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface SelectInputBoxProps {
    title: string;
    subtitle?: string;
    label: string;
    name: string;
    register: UseFormRegister<any>; // 또는 UseFormRegister<FormData> 등 필요한 타입으로 지정
    error?: string;
    defaultValue?: string | number;
    placeholder?: string;
    unit?: string;
}

export default function SelectInputBox({ title, subtitle, name, label, register, error, defaultValue, placeholder, unit } : SelectInputBoxProps){
    return (
      <div className="flex flex-col w-9xl text-[16px] text-SystemGray2">
        <div className="flex items-center justify-between pb-[3px]">
                <label htmlFor={name}>{title}</label>
                <div className="text-SystemBrand text-[12px]">{subtitle}</div>
            </div>
        <div className='flex justify-between w-full bg-white rounded-xl'>
            <input
                {...register(name, {
                    required: `${label} is required`,
                })}
                defaultValue={defaultValue}
                className="focus:outline-none rounded-xl h-[60px] pl-[20px] text-SystemGray1 placeholder-SystemGray4 outline-grayScreen"
                placeholder={placeholder}
            />
            {unit && <span className='flex items-center pr-[20px] text-SystemGray3'>{unit}</span>}
        </div>
        <div className='text-red-500 text-[12px]'>
            {error && <span>X {error}</span>}
        </div>
      </div>
    );
};