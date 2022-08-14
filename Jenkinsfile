pipeline {
  agent any
  stages {
    stage('从CODING检出代码......') {
      steps {
        echo '开始从CODING检出代码......'
        checkout([
          $class: 'GitSCM',
          branches: [[name: env.GIT_BUILD_REF]],
          userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]
        ])
        echo '完成从CODING检出代码......'
      }
    }
     
    stage('推送部署') {
      steps {
        echo '开始同步项目代码到GITEE...'
        echo '${GIT_COMMIT_MSG}'
        sh 'git fetch https://lingwh1995:${GITEE_TOKEN}@gitee.com/lingwh1995/blog.git'
        sh 'git push -f https://lingwh1995:${GITEE_TOKEN}@gitee.com/lingwh1995/blog.git HEAD:master'
        //sh 'git fetch https://lingwh1995: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@github.com/lingwh1995/springcloud-eureka.git'
        //sh 'git push -f https://lingwh1995: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@github.com/lingwh1995/springcloud-eureka.git HEAD:master'
        echo '完成同步项目代码到GITEE...'
      }
    }
    
    stage('自动部署博客到GITHUB/GITEE') {
      steps {
        echo '开始自动部署博客到GITHUB/GITEE...'
        sh 'chmod +x ./deploy.sh'
        sh 'bash ./deploy.sh ${GITHUB_TOKEN}'
        echo '完成自动部署博客到GITHUB/GITEE...'
      }
    }
  }
}