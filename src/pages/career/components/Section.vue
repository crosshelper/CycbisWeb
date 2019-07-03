<template>
    <section class="container my-5">
      <div class="my-5">
        <h2>We are hiring</h2>
        <h6>Joining us help billion of people and change the world.</h6>
      </div>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <div class="row">
                  <h6 class="col-6">Job description</h6>
                  <div class="col-6 row" >
                    <p class="col-2">Job ID:</p>
                    <span class="col-6">{{ props.row.id }}</span>
                  </div>
                </div>
                <span>{{ props.row.desc1 }}</span><br><br>
                <span>{{ props.row.desc2 }}</span><br><br>
                <span>{{ props.row.desc3 }}</span>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="Role"
            prop="role">
          </el-table-column>
          <el-table-column
            label="Department"
            prop="department">
          </el-table-column>
          <el-table-column
            label="Location"
            prop="location">
          </el-table-column>
        </el-table>
      </template>
    </section>
</template>

<script>
    export default {
        name: "section",
      data() {
        return {
          tableData: [{
            role: 'Software Engineer - Xamarin, C#, .NET',
            department: 'Engineering',
            location: 'San Jose, CA',
            id: '00001',
            desc1:'We are seeking to hire a full-time Xamarin Mobile Developer to help create and enhance rich customer-facing mobile applications for the construction and field service industries. As a member of the mobile team, you ll have the opportunity to work with the latest mobile technologies, learn new skills, and deliver features that our customers depend on every day.',
            desc2:'Responsibilities\n' +
            '- Create functional, attractive UIs on Android and iOS that look and feel native\n' +
            '- Work closely with product leads to extend and enhance the product portfolio\n' +
            '- Write tests to build a quality, stable product\n' +
            '- Diagnose and fix bugs and performance bottlenecks\n' +
            '- Contribute to the ongoing improvement of our systems and processes\n' +
            '- Participate in daily meetings with the development team\n' +
            '- Perform peer code reviews\n' +
            '- Leverage native APIs for deep integrations\n' +
            '- Research technologies and quickly implement proof of concepts and prototypes\n' +
            '- Manage the application deployment process',
            desc3:'Qualifications\n' +
            '- Experience in implementing mobile enterprise business applications for Android and iOS\n' +
            '- Understanding of Agile Methodology\n' +
            '- Unit, User Interface and integration testing experience\n' +
            '- 2+ years in mobile application development with Xamarin.Forms\n' +
            '- 3+ years of programming experience with C# & .Net\n' +
            '- Experience in working with RESTful services.\n' +
            '- Understanding of mobile development security considerations and concepts\n' +
            '- Ability to work independently and collaboratively\n' +
            '- BS/MS in Computer Science or a related field'
          },  {
            role: 'Front-End Developer - Vue.js',
            department: 'Engineering',
            location: 'Nan Jing & Bei Jing, China',
            id: '00002',
            desc1: 'We are looking for Vue.js Developer that has experience working in a service-oriented architecture, both designing and building services and websites from the ground up. You should have experience with scaling code and services to handle high-volume traffic and many concurrent users, stay current with the newest online technologies and make recommendations on implementations. You will work closely with backend engineers to understand, design, and contribute to the clientrsquos APIs and build efficient and reusable front-end systems and abstractions adhering to front end best practices.',
            desc2: 'Responsibilities: Contribute high quality, production code for client\'s products security, reliability, availability and scale Determine the best implementation that will meet the design of the Systems Solution Architect Work with Vue.js and MySQL to design, develop and debug Web applications Perform requirements analysis, high-level design, effort estimation for new business requirements and feature enhancements Participate in design discussions with business users, Solution System Architect and engineering teams Work closely with QA engineers, technical leads and business users Solve technical problems and handle performancescalability issues on a day to day basis Integrate back-end services with Vue.js based front end needs Work with the team to manage, optimize and customize multiple web applications Create and maintain technical documentation\n',
            desc3: 'Requirements: 3+ years of software development experience, including Object Oriented design and Vue.js Development 3+ years of experience in building database-driven applications and Web sites Proficiency with front-end scripting including HTML, DHTML, JavaScript, CSS, AJAX Understanding and demonstrated adaptation of cross-platform, cross-browser compatibility concerns Experience in Vue.js development frameworks is required. Previous experience with Code Igniter is a huge plus. Strong presentation, communication, and collaboration skills, enabling effective interaction and knowledge transfer to teammates and other departments within the company A high task load is expected. You should be able to work within tight deadlines while exhibiting exemplary time management and task prioritization Positive attitude and professionalism in the workplace as well as great sense of humor is always appreciated\n'
          }, {
            role: 'Sales',
            department: 'Marketing',
            location: 'San Jose, CA',
            id: '00003',
            desc1: 'The Sales Development Representative, Cycbis is a key player to help accelerate our growth. You will present our application to small business owners. You will partner closely with the marketing team by qualifying marketing driven leads and setting up meetings that yield new deal opportunity.',
            desc2: 'Responsibilities:\n' +
            'Qualify leads from marketing activities as sales opportunities\n' +
            'Develop a comprehensive understanding of Cycbis and Cycbis pro\n' +
            'Present our application to small business owners.\n' +
            'Develop new business opportunities to deliver to the Founder team to further accelerate our growth',
            desc3: 'Requirements: Bachelor’s degree in business, marketing, finance or related fields. 0-1 year of sales experience, ideally software sales or relevant sales experience. You know you want a career in sales and this job is the first step in having a successful sales career. Track record of successful achieving or overachieving goals. Excellent verbal and written communication skills: you are a clear, concise and compelling storyteller. Fearless and positive attitude – willing to take intelligent risks while being a team player and you are resilient in the face of challenges. Strong time management skills; ability to prioritize effectively, meet deadlines, work with others and follow through to execute all tasks. Self-starter – you’re always looking for ways to do your job better and you never wait to be told what to do. When you see an opportunity, you jump on it. Passion and desire to empower finance professionals to be more productive through cloud technologies. Prior experience using Salesforce.com is desired but not required. Chinese or Spanish is plus.'
          }, {
            role: 'Sales',
            department: 'Marketing',
            location: 'Los Angeles, CA',
            id: '00004',
            desc1: 'The Sales Development Representative, Cycbis is a key player to help accelerate our growth. You will present our application to small business owners. You will partner closely with the marketing team by qualifying marketing driven leads and setting up meetings that yield new deal opportunity.',
            desc2: 'Responsibilities:\n' +
            'Qualify leads from marketing activities as sales opportunities\n' +
            'Develop a comprehensive understanding of Cycbis and Cycbis pro\n' +
            'Present our application to small business owners.\n' +
            'Develop new business opportunities to deliver to the Founder team to further accelerate our growth',
            desc3: 'Requirements: Bachelor’s degree in business, marketing, finance or related fields. 0-1 year of sales experience, ideally software sales or relevant sales experience. You know you want a career in sales and this job is the first step in having a successful sales career. Track record of successful achieving or overachieving goals. Excellent verbal and written communication skills: you are a clear, concise and compelling storyteller. Fearless and positive attitude – willing to take intelligent risks while being a team player and you are resilient in the face of challenges. Strong time management skills; ability to prioritize effectively, meet deadlines, work with others and follow through to execute all tasks. Self-starter – you’re always looking for ways to do your job better and you never wait to be told what to do. When you see an opportunity, you jump on it. Passion and desire to empower finance professionals to be more productive through cloud technologies. Prior experience using Salesforce.com is desired but not required. Chinese or Spanish is plus.'
          }, {
            role: 'UI & UX Designer',
            department: 'Design',
            location: 'San Jose, CA',
            id: '00005',
            desc1: 'We have a great opportunity for a UI/UX Designer.',
            desc2: 'Responsibilities of the UI/UX Designer: Design UI for an Ios, Android, web application. Develop work based on product vision, client requirements, and user stories. Deliver high quality, immersive designs according to strict deadlines. Work independently and collaboratively to solve problems. Adhere to and improve style guidelines.',
            desc3: 'Requirements of the UI/UX Designer: Bachelor\'s degree or equivalent work experience. At least 3 years of experience in interactive design and 2 years of experience in mobile application design. Proven UI design, layout, and typography skills. Experience with Adobe Creative Suite. Excellent visualization and communication skills. Online portfolio of work.'
          }]
        }
      }
    }
</script>

<style scoped>
h2{
  color: #ff4e17;
}
</style>
