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
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    confirm(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "確認";
      this.confirmObj.titleIcon = "fas fa-info-circle";
      this.confirmObj.titleColor = "info";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "error",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    /**
     * 警告ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {fuction} callback 「はい」を押した後に実行されるコールバック関数
     */
    warning(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
      this.confirmObj.titleColor = "warning";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "error",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
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
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      this.open();
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
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      this.open();
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
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];
      this.open();
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
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    // ダイアログを表示する
    open() {
      this.confirmObj.dialog = true;
    },
    // ダイアログを閉じる
    close() {
      this.confirmObj.dialog = false;
    },
  },
};
