document.addEventListener('DOMContentLoaded', () => {
    const unlockButton = document.getElementById('unlock-button');
    const passwordInput = document.getElementById('password-input');
    // الحصول على الشاشة الرئيسية للدخول (والتي تحتوي على كل العناصر)
    const loginScreen = document.getElementById('login-screen'); 
    const mainContent = document.getElementById('main-content');

    // ** كلمة المرور السرية (قم بتعديلها لتكون كلمة مرورك الخاصة) **
    const SECRET_PASSWORD = '3092010'; 

    unlockButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.trim().toLowerCase();

        if (enteredPassword === SECRET_PASSWORD) {
            
            // 1. إخفاء شاشة الدخول بالكامل (الخانة والزر والأيقونات) 
            // هذا التعديل يضمن اختفاء كل عناصر شاشة الدخول
            loginScreen.style.display = 'none'; 
            
            // 2. إظهار شاشة المحتوى الرئيسي
            mainContent.classList.add('active');
            
            // محاولة تشغيل الصوت تلقائياً (قد يحظرها المتصفح)
            const audio = mainContent.querySelector('audio');
            if (audio) {
                audio.play().catch(error => {
                    console.log('تشغيل الصوت التلقائي محظور: يتطلب تفاعل مستخدم إضافي.');
                });
            }

        } else {
            // رسالة تنبيه في حالة كلمة مرور خاطئة
            alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
            passwordInput.value = ''; // مسح الإدخال
        }
    });

    // للتأكد من أن شاشة الدخول هي أول ما يظهر عند التحميل
    // (يستخدم style.display في CSS للتحكم بالإخفاء)
    loginScreen.classList.add('active');
});
