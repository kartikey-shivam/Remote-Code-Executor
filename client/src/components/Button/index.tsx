import React from "react"
import Image from "next/image"
import { IButton } from "@/interface"

export default function Button({ src, Click, language, Styles }: IButton) {
  return (
    <button
      type="submit"
      onClick={() => Click(language)}
      className={Styles.color === "active" && Styles.Lang == language ? "w-full m-auto p-4 flex justify-center bg-gray-200 item-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800" : "w-full m-auto p-4 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"}
    >
      <Image src={src} alt="" width={50} height={50} />
    </button>
  )
}
