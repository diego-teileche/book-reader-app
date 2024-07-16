"use client"
import { books } from "@/constants/mockData"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-toastify/dist/ReactToastify.css"

import styles from "./page.module.css"
import { Editor, useDomValue } from "reactjs-editor"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

const BookPage = () => {
	const { id } = useParams()
	const { dom, setDom } = useDomValue()

	const selectedBook = books.filter((book, i) => {
		return id === String(book.id)
	})

	const notify = () => toast("Your changes have been saved successfully!")

	useEffect(() => {
		const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`)

		if (savedDom) setDom(JSON.parse(savedDom))
	}, [])

	if (!selectedBook.length) return <h3>Book not found</h3>

	const handleSave = () => {
		const updatedDomValue = {
			key: dom?.key,
			props: dom?.props,
			ref: dom?.ref,
			type: dom?.type,
		}

		localStorage.setItem(
			`dom${selectedBook[0].id}`,
			JSON.stringify(updatedDomValue)
		)

		notify()
	}

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

			<Editor
				htmlContent={`
          <main className="bookContainer">
            <aside>
              <h1 className="center">${selectedBook[0].title}</h1>
              <span className="center small">
                By ${selectedBook[0].author}
              </span>

              ${selectedBook[0].content}
            </aside>
          </main>
        `}
			/>

			<ToastContainer />
		</motion.div>
	)
}

const iconStyle = {
	marginRight: "20px",
	fontSize: "20px",
}

export default BookPage
