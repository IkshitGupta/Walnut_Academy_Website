interface SpinnerProps {
	size?: number; // Allow customization of size
	color?: string; // Allow customization of color
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 48, color = "#3b82f6" }) => {
	return (
		<div
			className="flex justify-center items-center" // Centering spinner
			aria-live="polite"
			role="status"
			style={{ width: size, height: size }}>
			<div
				className="border-4 border-dashed rounded-full animate-spin"
				style={{
					borderColor: `${color} transparent transparent transparent`,
					width: size,
					height: size,
				}}></div>
		</div>
	);
};
