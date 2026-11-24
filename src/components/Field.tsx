import type {ReactNode} from 'react';

interface Props {label: string, id: string; error?: string; children: ReactNode;}


export default function Field({label, id, error, children}: Props){
    return (
        <div className='flex flex-vol gap-1'>
            <label htmlFor={id}>{label}</label>
            {children}
            {error && <p className="text-error text-sm">{error}</p>}
        </div>
    );
}