"use client"

export default function Toast({ toastMessage }) {
  if (!toastMessage) return null

  return <div className={`toast show ${toastMessage.type}`}>{toastMessage.message}</div>
}
