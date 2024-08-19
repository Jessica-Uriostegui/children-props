import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
      <div style={{
        width: '300px', 
        margin:'20px', 
        border: '3px solid #ccc', 
        padding: '16px', 
        borderRadius: '8px',}}>
        {children}
      </div>
    );
};

export default Card;