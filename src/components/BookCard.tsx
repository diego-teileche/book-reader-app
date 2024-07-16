"use client"
interface BookCardProps {
	title: string
	description: string
	coverImage: string
	onClick: any
}

const BookCard: React.FC<BookCardProps> = ({
	title,
	description,
	coverImage,
	onClick,
}) => {
	return (
		<div style={cardStyle} onClick={onClick}>
			<img src={coverImage} style={imageStyle} alt={title} />

			<div style={contentStyle}>
				<h3 style={titleStyle}>{title}</h3>

				<p style={descriptionStyle}>{description}</p>
			</div>
		</div>
	)
}

const cardStyle = {
	width: "200px",
	padding: "1rem",
	borderRadius: "5px",
	backgroundColor: "#151515",
	boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
	cursor: "pointer",
	transition: "transform 0.3s ease",
	marginBottom: "1.5rem",
	marginRight: "1.6rem",
}

const imageStyle = {
	width: "100%",
	aspectRatio: 1,
	borderRadius: "10px",
}

const contentStyle = {
	marginTop: "1rem",
}

const titleStyle = {
	fontSize: "1.2rem",
	marginBottom: "0.5rem",
	color: "#f0f0f0",
}

const descriptionStyle = {
	fontSize: "0.8rem",
	color: "#a0a0a0",
}

export default BookCard
