"use client";
import AdminGaurd from "@/components/Realty/Admin/AdminGaurd";
import app from "@/firebase/config";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
const auth = getAuth(app);

function AdminLayout({ children }) {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const adminEmail = "admin.99groups@gmail.com";
        setAdmin(user.email === adminEmail);
      } else {
        setAdmin(null);
      }
    });
  });
  if (!admin) return <AdminGaurd />;
  return <> {children} </>;
}

export default AdminLayout;
