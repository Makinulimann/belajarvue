<template>
  <div class="biodata">
    <h1>Curriculum Vitae</h1>

    <div class="profile">
      <div class="profile-photo">
        <img :src="profile.photo" alt="Foto Profil">
      </div>

      <div class="profile-info">
        <h2>{{ profile.name }}</h2>
        <p class="job-title">{{ profile.jobTitle }}</p>
        <p>{{ profile.email }} | {{ profile.phone }}</p>
        <p>{{ profile.address }}</p>
      </div>
    </div>

    <div class="section">
      <h3>Tentang Saya</h3>
      <p>{{ profile.about }}</p>
    </div>

    <div class="section">
      <h3>Pendidikan</h3>
      <div v-for="(edu, index) in education" :key="'edu-' + index" class="item">
        <h4>{{ edu.degree }}</h4>
        <p class="institution">{{ edu.institution }}, {{ edu.period }}</p>
        <p>{{ edu.description }}</p>
      </div>
    </div>

    <div class="section">
      <h3>Pengalaman Kerja</h3>
      <div v-for="(job, index) in experience" :key="'job-' + index" class="item">
        <h4>{{ job.position }}</h4>
        <p class="institution">{{ job.company }}, {{ job.period }}</p>
        <p>{{ job.description }}</p>
      </div>
    </div>

    <div class="section">
      <h3>Keahlian</h3>
      <ul class="skills">
        <li v-for="(skill, index) in skills" :key="'skill-' + index">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiodataPage',
  data() {
    return {
      profile: {
        name: "Muhammad Makinul Iman",
        jobTitle: "Information System student",
        photo: require('@/assets/pasfoto.jpg'), 
        email: "makinuliman@student.ub.ac.id",
        phone: "+6281327521645",
        about: "Saya adalah seorang profesional berpengalaman dengan latar belakang pendidikan di bidang Sistem Informasi. Saya memiliki kemampuan analitis yang kuat dan keterampilan komunikasi yang baik. Saya selalu bersemangat untuk belajar hal-hal baru dan beradaptasi dengan teknologi terbaru."
      },
      education: [
        {
          degree: "S1 Sistem Informasi",
          institution: "Universitas Brawijaya",
          period: "2022-sekarang",
          description: "IPK 3.75. Fokus pada pengembangan aplikasi web dan mobile."
        },
        {
          degree: "SMAN 2 Tuban",
          institution: "SMAN 2 Tuban",
          period: "2019-2022",
        }
      ],
      experience: [
        {
          position: "Full Stack Developer",
          company: "META",
          period: "2020-Sekarang",
          description: "Mengembangkan aplikasi web menggunakan Vue.js, Node.js, dan MongoDB. Berkolaborasi dengan tim desain dan produk untuk mengimplementasikan fitur baru."
        },
        {
          position: "AI Engineer Intern",
          company: "Google",
          period: "2019-2020",
          description: "Membantu pengembangan AI image generator dengan Python."
        }
      ],
      skills: [
        "JavaScript", "Vue.js", "HTML5/CSS3", "Node.js", "MongoDB", "Git", "Responsive Design", "RESTful API"
      ]
    };
  }
};
</script>

<style scoped>
.biodata {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.profile {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
}

.profile-photo {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 30px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 5px;
  color: #333;
}

.job-title {
  font-size: 1.2em;
  color: #42b983;
  margin-top: 0;
}

.section {
  margin-bottom: 30px;
}

.section h3 {
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  color: #333;
}

.item {
  margin-bottom: 20px;
}

.item h4 {
  margin-bottom: 5px;
  color: #2c3e50;
}

.institution {
  font-style: italic;
  color: #666;
  margin-top: 0;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.skills li {
  background-color: #f1f1f1;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 20px;
  font-size: 0.9em;
}
</style>