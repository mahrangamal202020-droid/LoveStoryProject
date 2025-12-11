document.addEventListener('DOMContentLoaded', () => {
    const unlockButton = document.getElementById('unlock-button');
    const passwordInput = document.getElementById('password-input');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    // ** كلمة المرور السرية هنا **
    const SECRET_PASSWORD = '3092010'; // يمكنك تغييرها إلى أي كلمة تريدها

    unlockButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.trim().toLowerCase();

        if (enteredPassword === SECRET_PASSWORD) {
            // إخفاء شاشة الدخول وإظهار المحتوى
            loginScreen.classList.remove('active');
            mainContent.classList.add('active');
            // تشغيل الأغنية تلقائياً (قد يحظرها المتصفح حتى يتفاعل المستخدم)
            const audio = mainContent.querySelector('audio');
            if (audio) {
                audio.play().catch(error => {
                    console.log('تشغيل الصوت التلقائي محظور: ', error);
                });
            }

        } else {
            // تنبيه في حال كلمة المرور خاطئة
            alert('كلمة المرور غير صحيحة. حاول مرة أخرى!');
            passwordInput.value = ''; // مسح الإدخال
        }
    });

    // للتأكد من أن شاشة الدخول هي أول ما يظهر عند التحميل
    loginScreen.classList.add('active');
});