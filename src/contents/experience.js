import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/picture.png';
import picASP from '../assets/ASP.NET Core.png'
import picFultter from '../assets/Flutter.png'
import { text } from "@fortawesome/fontawesome-svg-core";

export const data = [
    {
        date: "ปี 2 ภาคปลาย",
        title: "02739212 · Principles of Object Oriented Programming",
        link: "https://github.com/TitaniumSalmon/Java",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/Java"},
        ],
        descriptions: [
            "การเรียนวิชาหลักการเขียนโปรแกรมเชิงวัตถุโดยใช้ภาษา Java ด้วย IDE ของ IntelliJ IDEA ได้เรียนรู่ 2 อย่างคือ",
            "1. ได้รู้ว่าภาษา Java มี Syntax เป็นอย่างไร , ฝึกการใช้โปรแกรม IntelliJ , เพิ่มทักษะการเขียนโปรแกรมภาษาใหม่",
            "2. ได้รู้ว่าการเขียนโปรแกรมแบบ OOP เป็นอย่างไร การสืบทอดจากฟังก์ชันแม่สืบทอดฟังก์ชันลูกเป็นอย่างไร การเขียนโปรแกรมแบบ OOP ช่วยให้เขียนโปรแกรมเป็นระบบ และช่วยลดความซ้ำซ้อนของฟังก์ชันที่เรียกใช้บ่อย ๆ"
        ],
        skills: [
            ["Java"],
        ],
        picture: picExp,
    },
    {
        title: "02739241 · Internet Technology",
        link: "https://github.com/TitaniumSalmon/241-2567_700",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/241-2567_700" },
        ],
        descriptions: [
            "ได้รู้จักการเขียนเว็บเบื้องต้น รู้วิธีสร้าง Frontend, Backend, สร้างและทดสอบ API, ฝึกการใช้ docker เบื้องต้น, สร้าง database ในการจัดเก็บข้อมูล",
        ],
        skills: [
            ["JavaScript", "HTML", "CSS"],
        ],
        picture: picExp,
    },
    {
        date: "ปี 3 ภาคต้น",
        title: "ASP.NET Core MVC",
        link: "https://github.com/TitaniumSalmon/ASP.NET-Core-MVC-Tutorial",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/ASP.NET-Core-MVC-Tutorial" },
        ],
        descriptions: [
            "ได้ฝึกใช้ Framework ASP.NET Core MVC ทำให้รู้ว่า Model (ข้อมูล), View (หน้าจอแสดงผล) และ Controller (ตรรกะการทำงาน) คืออะไรและมีหน้าที่อะไร",
        ],
        skills: [
            ["HTML","C#","CSS","JavaScript"],
        ],
        picture: picExp,
    },
    {
        title: "02739342 · Application Development for Mobile Devices",
        link: "https://github.com/TitaniumSalmon/02739342-Flutter",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/02739342-Flutter" },
        ],
        descriptions: [
            "ได้รู้จักการใช้ Flutter ในการทำ Mobile Application, ใช้ Firebase ในการจัดเก็บข้อมูล Flutter สามารถเป็นอีกตัวเลือกหนึ่งในการทำ Web app",
        ],
        skills: [
            ["Flutter","Firebase"],
        ],
        picture: picExp,
    },
    {
        date: "ปี 3 ภาคปลาย",
        title: "Angular",
        link: "https://github.com/TitaniumSalmon/Angular-Framework",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/Angular-Framework" },
        ],
        descriptions: [
            "ได้ฝึกการใช้ Angular Framework ทำส่วนของ Frontend",
        ],
        skills: [
            ["Angular"],
        ],
        picture: picExp,
    },
    {
        title: "Spring Boot",
        link: "https://github.com/TitaniumSalmon/Spring-Boot",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/Spring-Boot" },
        ],
        descriptions: [
            "ได้ฝึกการใช้ Spring Boot Framework ทำส่วนของ Backend โดยเขียนด้วยภาษา Java",
        ],
        skills: [
            ["Spring Boot"],
        ],
        picture: picExp,
    },
    {
        title: "02739354 · Design and Development for Internet of Things",
        link: "https://github.com/TitaniumSalmon/02739354-IoT",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/02739354-IoT" },
        ],
        descriptions: [
            "ได้ฝึกการเขียนโปรแกรมและต่อบอร์ด ESP-32 จำลองใน Wokwi",
            "ได้รู้จักว่า MQTT Protocol คืออะไรมีข้อดีอย่างไร และทดลองใช้ MQTT Protocol",
            "ได้ลองใช้ NETPIE เป็นศูนย์กลางเชื่อมต่อและแลกเปลี่ยนข้อมูล และใช้ Mobile application เขียนด้วย Flutter ควบคุมอุปกรณ์และบันทึกข้อมูลไว้ใน Firebase"
        ],
        skills: [
            ["C","C++"],
        ],
        picture: picExp, 
    },
    {
        title: "Automate Testing",
        link: "https://github.com/TitaniumSalmon/Playwright",
        materials: [
            { type: faGithub, link: "https://github.com/TitaniumSalmon/Robot-Framework"},
            { type: faGithub, link: "https://github.com/TitaniumSalmon/Playwright"},
        ],
        descriptions: [
            "ได้ลองเขียนระบบ Testing อัตโนมัติ โดยไม่ต้อง Manual Testing ทุกครั้งหลังระบบเพิ่มฟังก์ชันมาใหม่"
        ],
        skills: [
            ["Robot Framework","Playwright"],
        ],
        picture: picExp, 
    },
]