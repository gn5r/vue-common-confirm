export default {
  data: () => ({
    // Confirm用オブジェクト
    confirmObj: {
      dialog: false,
      title: "",
      titleIcon: "",
      titleColor: "",
      message: "",
      buttons: [],
    },
  }),

  // 関数定義
  methods: {
    /**
     * 確認用ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} yes 「はい」を押した後に実行されるコールバック関数
     * @param {fuction} no 「いいえ」を押した後に実行されるコールバック関数
     */
    cmnConfirm(message, yes = null, no = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "確認";
      this.confirmObj.titleIcon = "fas fa-info-circle";
      this.confirmObj.titleColor = "info";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            this.confirmObj.dialog = false;
            if (yes !== null && typeof yes === "function") yes();
          },
        },
        {
          text: "いいえ",
          color: "error",
          outlined: false,
          function: () => {
            this.confirmObj.dialog = false;
            if (no !== null && typeof no === "function") no();
          },
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },

    /**
     * 警告ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} yes 「はい」を押した後に実行されるコールバック関数
     * @param {fuction} no 「いいえ」を押した後に実行されるコールバック関数
     */
    warning(message, yes = null, no = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
      this.confirmObj.titleColor = "warning";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            // ダイアログを閉じてからコールバック関数を実行する
            this.confirmObj.dialog = false;
            if (yes !== null && typeof yes === "function") yes();
          },
        },
        {
          text: "いいえ",
          color: "error",
          outlined: false,
          function: () => {
            this.confirmObj.dialog = false;
            if (no !== null && typeof no === "function") no();
          },
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },

    /**
     * エラーダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    err(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "エラー";
      this.confirmObj.titleIcon = "fas fa-exclamation-circle";
      this.confirmObj.titleColor = "error";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            // ダイアログを閉じてからコールバック関数を実行する
            this.confirmObj.dialog = false;
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },

    /**
     * 処理完了ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    complete(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "完了";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "success";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            // ダイアログを閉じてからコールバック関数を実行する
            this.confirmObj.dialog = false;
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },

    /**
     * vue-common-confirm版alert関数
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    modal(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            // ダイアログを閉じてからコールバック関数を実行する
            this.confirmObj.dialog = false;
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },

    /**
     * 警告アラートダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    warn(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
      this.confirmObj.titleColor = "warning";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          outlined: false,
          function: () => {
            // ダイアログを閉じてからコールバック関数を実行する
            this.confirmObj.dialog = false;
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.confirmObj.dialog = true;
    },
  },
};
