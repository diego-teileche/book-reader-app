"use client"
import { books } from "@/constants/mockData"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.min.css"

import styles from "./page.module.css"

const BookPage = () => {
	const { id } = useParams()

	const selectedBook = books.filter((book, i) => {
		return id === String(book.id)
	})

	if (!selectedBook.length) return <h3>Book not found</h3>

	const handleSave = () => {}

	return (
		<motion.div
			transition={{ type: "spring", damping: 40, mass: 0.75 }}
			initial={{ opacity: 0, x: 1000 }}
			animate={{ opacity: 1, x: 0 }}
		>
			<motion.section
				transition={{ type: "spring", damping: 44, mass: 0.75 }}
				initial={{ opacity: 0, y: -1000 }}
				animate={{ opacity: 1, y: 0 }}
				className={styles.appBar}
			>
				<div className={styles.leftIcons}>
					<i
						style={{ fontSize: "20px", cursor: "pointer" }}
						className="fas fa-chevron-left"
					></i>
				</div>
				<div className={styles.title}>
					{" "}
					<h2 className={styles.titleStyles}> {selectedBook[0].title}</h2>
				</div>
				<div className={styles.icons}>
					<button className={styles.saveButton} onClick={handleSave}>
						Save
					</button>
					<i style={iconStyle} className="fas fa-cog"></i>
					<i style={iconStyle} className="fas fa-share"></i>
					<i style={iconStyle} className="fas fa-search"></i>
				</div>
			</motion.section>
		</motion.div>
	)
}

const iconStyle = {
	marginRight: "20px",
	fontSize: "20px",
}

export default BookPage
