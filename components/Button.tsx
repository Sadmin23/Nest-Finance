import { Icon } from '@iconify/react';

interface ButtonProps {
  label?: string;
  icon?: any;
  type?: 'button' | 'submit' | 'reset';
  onPress?: () => void;
  left?: boolean;
  right?: boolean;
  styles?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  type,
  onPress,
  left,
  right,
  styles,
  className,
}) => {
  return (
    <button
      type={type ?? 'button'}
      onClick={onPress}
      className={`font-regular text-[16px] items-center px-6 shadow-md justify-center rounded-full py-2.5 text-center inline-flex items-center ${
        className || ''
      } ${styles}`}
    >
      <Icon icon={icon} className={`${label && 'mr-4'} text-[20px]`} />
      {label && label}
      {right && (
        <Icon icon={icon} className={`${label && 'ml-4'} text-[20px]`} />
      )}
    </button>
  );
};
const withVariant =
  (variant: string) => (WrappedComponent: React.ComponentType<ButtonProps>) => {
    const variantProps: ButtonProps = {
      primary: {
        className: 'bg-brand hover:bg-opacity-80 text-white my-3',
      },
      secondary: {
        className:
          'bg-brand bg-opacity-20 text-brand hover:bg-brand hover:bg-opacity-10',
      },
      danger: {
        className: 'bg-red hover:bg-opacity-80 text-white',
      },
      link: {
        className: 'text-brand hover:underline',
      },
      link_secondary: {
        className: 'text-gray-1 hover:underline',
      },
      border_button: {
        className:
          'border-brand uppercase px-5 border-[1px] text-brand hover:opacity-60',
      },
    }[variant];

    return (props: ButtonProps) => (
      <WrappedComponent {...props} {...variantProps} />
    );
  };

export const PrimaryButton: React.FC<ButtonProps> =
  withVariant('primary')(Button);
export const SecondaryButton: React.FC<ButtonProps> =
  withVariant('secondary')(Button);
export const DangerButton: React.FC<ButtonProps> =
  withVariant('danger')(Button);
export const LinkButton: React.FC<ButtonProps> = withVariant('link')(Button);
export const LinkSecondaryButton: React.FC<ButtonProps> =
  withVariant('link_secondary')(Button);
export const BorderButton: React.FC<ButtonProps> =
  withVariant('border_button')(Button);
