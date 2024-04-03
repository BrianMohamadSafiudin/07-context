### Nama : Brian Mohamad Safiudin
### NIM : 2141720133
### Kelas : TI-3A
---

# Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context

Pada praktikum ini, Anda akan mempelajari cara menggunakan `context` dengan diakses oleh komponen child didalamnya. `Context` memungkinkan sebuah komponen induk menyediakan data untuk seluruh pohon (tree) di bawahnya. Ada banyak kegunaan dari `context`

## Soal 1
#### Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![Screenshot P1](assets-report/praktikum1.jpg)

- `Membuat Struktur Folder dengan Prinsip Atomic Design`. Struktur folder dibuat dengan menggunakan prinsip desain atomik, yang membagi komponen menjadi level-level yang lebih kecil mulai dari atom, molekul, organisme, hingga template.

- `Membuat Komponen Atom`. Membuat komponen atom seperti Heading dan Section yang masing-masing bertanggung jawab untuk menampilkan judul dan bagian di halaman web.

- `Menggunakan Prop untuk Menentukan Ukuran Heading`. Komponen Heading menerima prop level yang digunakan untuk menentukan ukuran teks heading sesuai dengan level yang diberikan.

## Soal 2
#### Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
#### Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!

![Screenshot P1](assets-report/praktikum1soal2a.jpg)

- Error terjadi karena komponen yang diimpor membutuhkan `createContext` yang hanya bekerja pada `komponen klien`, namun belum ada parents yang menggunakan `use client`, sehingga `dianggap komponen server secara default`. Oleh karena itu, perlu ditambahkan `'use client';` pada file yang mengimpor komponen tersebut.

```tsx
'use client';

import MainPage from "@/components/templates/main_page";

export default function Home() {
    return <MainPage />;
}
```

![Screenshot P1](assets-report/praktikum1soal2b.jpg)

- `useContext adalah sebuah Hook`. Sama seperti `useState` dan `useReducer`, hanya dapat memanggil sebuah Hook secara langsung di dalam komponen React (bukan di dalam pengulangan atau pengkondisian). useContext memberitahu React bahwa komponen `Heading` mau membaca `LevelContext`.

- Sekarang `komponen Heading tidak membutuhkan sebuah prop level`, tidak perlu mengoper level prop ke Heading. Sebagai gantinya Perbarui sehingga Section yang dapat menerimanya.

## Soal 3
#### Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![Screenshot P1](assets-report/praktikum1soal3.jpg)

```tsx
import { LevelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";

export default function Section({ children }: { children: any }) {
    const level = useContext(LevelContext);
    return (
        <section className={`section`}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
```

- `Menggunakan useContext untuk Membaca Context`. useContext adalah sebuah Hook yang memungkinkan Anda menggunakan nilai dari Context tanpa perlu menulis Consumer. useContext akan membaca nilai dari Context yang Anda berikan (dalam kasus ini, LevelContext).

- `Menggunakan Context untuk Menentukan Ukuran Heading`. Section menerima children dan menambahkan 1 ke level sebelumnya. Dengan demikian, semua Heading yang berada di dalam Section akan memiliki ukuran yang lebih besar dari Heading yang berada di luar Section.

---
