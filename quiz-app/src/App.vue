<template>
  <div id="app">
    <div style="height: 80px; width: 100%; background-color: red; display: flex; justify-content: center; align-items: center;">
      <h1 style="color: white; font-size: 40px; font-weight: bold">人人讲安全 个个会应急 ----- 畅通生命通道</h1>
    </div>
    <div v-if="quiz.length > 0">
      <div v-for="(question, index) in quiz" :key="index" class="question-card">
        <p class="question">{{`问题${index + 1}: `+question.question }}</p>
        <div class="options">
          <label v-for="(option, optionIndex) in question.options" :key="optionIndex" class="option-label">
            <input
                :type="question.type === 'single' ? 'radio' : 'checkbox'"
                :name="'question-' + index"
                :value="option.id"
                v-model="answers[index]"
            />
            {{ option.id }}. {{ option.text }}
          </label>
        </div>
      </div>
      <div class="button-container">
        <button @click="submitQuiz" class="submit-button">提交</button>
      </div>
    </div>
    <div v-else>
      <div class="button-container">
        <button @click="startQuiz" class="start-button">开始测试</button>
      </div>
    </div>
    <div v-if="showResults" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <h2>结果</h2>
        <p>正确: {{ results.correct }}</p>
        <p>错误: {{ results.incorrect }}</p>
        <h3>详细结果:</h3>
        <ul>
          <li v-for="(result, index) in results.details" :key="index">
            <span :style="{ color: result.isCorrect ? 'green' : 'red' }">
              {{ result.question }} - 你的答案: {{ result.answer.join(', ') }} (正确答案: {{ result.correctAnswer.join(', ') }})
            </span>
          </li>
        </ul>
        <p v-if="quizIndex === maxQuizIndex">题库已抽取完</p>
        <div class="button-container">
          <button @click="startQuizNext" class="start-button" v-if="quizIndex < maxQuizIndex">下一份</button>
          <button @click="refresh" class="start-button" v-else>重新开始</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questions } from './questions';

export default {
  data() {
    return {
      quiz: [],
      answers: [],
      results: null,
      showResults: false,
      quizIndex: 0, // 当前使用的题库索引
      maxQuizIndex: 3, // 最大题库索引，即题库数量减1
    };
  },
  mounted() {
    // 检查localStorage中是否存在quizIndex，如果不存在则初始化为0
    const storedIndex = localStorage.getItem('quizIndex');
    if (storedIndex) {
      this.quizIndex = parseInt(storedIndex);
    }
  },
  methods: {
    refresh(){
      this.quizIndex = 0
      this.startQuiz()
    },
    startQuiz() {
      // 获取当前题库
      this.quiz = this.generateQuiz();
      this.answers = Array(this.quiz.length).fill(null).map(() => []);
      this.results = null;
      this.showResults = false;
    },
    startQuizNext() {
      // 获取当前题库
      console.log(this.quizIndex,'this.quizIndex')
      if(this.quizIndex < this.maxQuizIndex){
        this.quizIndex ++
      }
      this.quiz = this.generateQuiz();
      this.answers = Array(this.quiz.length).fill(null).map(() => []);
      this.results = null;
      this.showResults = false;
    },
    submitQuiz() {
      let correct = 0;
      let incorrect = 0;
      const details = this.quiz.map((question, index) => {
        const userAnswer = this.answers[index];
        let isCorrect = false;

        if (question.type === 'single') {
          isCorrect = userAnswer === question.correct;
        } else if (question.type === 'multiple') {
          isCorrect = Array.isArray(userAnswer) && userAnswer.sort().toString() === question.correct.sort().toString();
        }

        if (isCorrect) {
          correct++;
        } else {
          incorrect++;
        }

        return {
          question: question.question,
          answer: Array.isArray(userAnswer) ? userAnswer : [userAnswer],
          correctAnswer: Array.isArray(question.correct) ? question.correct : [question.correct],
          isCorrect
        };
      });
      this.results = { correct, incorrect, details };
      this.showResults = true;
    },
    closeModal() {
      this.showResults = false;
    },
    generateQuiz() {
      const currentQuestions = questions[this.quizIndex];
      return currentQuestions;
    },
  },
  watch: {
    quizIndex(newIndex) {
      // 将当前题库索引存储到localStorage中
      localStorage.setItem('quizIndex', newIndex);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: left;
  margin-top: 40px;
  padding: 0 20px;
}

.question-card {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question {
  margin-bottom: 10px;
}

.options {
  display: flex;
  flex-direction: column;
}

.option-label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.option-label input {
  margin-right: 10px;
  transform: scale(1.2);
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 按钮上方增加一些间距 */
}

.submit-button,
.start-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 10px; /* 按钮之间增加一些间距 */
  cursor: pointer;
  border-radius: 5px;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
  text-align: left;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
