/**
 * Possible errors
 */
module.exports = {
    "rules": {
        /**
         * 禁止使用无效的十六进制颜色
         * @see https://stylelint.io/user-guide/rules/color-no-invalid-hex/
         */
        "color-no-invalid-hex": true,

        /**
         * 禁止使用重复的字体名称
         * @see https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
         */
        "font-family-no-duplicate-names": true,

        /**
         * 总是添加字体族
         * @see https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
         */
        "font-family-no-missing-generic-family-keyword": true,

        /**
         * 禁止在 calc 函数内使用无效的表达式
         * @see https://stylelint.io/user-guide/rules/function-calc-no-invalid/
         */
        "function-calc-no-invalid": true,

        /**
         * 禁止在 calc 函数内使用不加空格的操作符
         * @see https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
         */
        "function-calc-no-unspaced-operator": true,

        /**
         * 根据标准语法，禁止 `linear-gradient()` 中无效的方向值
         * @see https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
         */
        "function-linear-gradient-no-nonstandard-direction": true,

        /**
         * 禁止在字符串中使用（非转义的）换行符
         * @see https://stylelint.io/user-guide/rules/string-no-newline/
         */
        "string-no-newline": true,

        /**
         * 禁止使用未知单位
         * @see https://stylelint.io/user-guide/rules/unit-no-unknown/
         */
        "unit-no-unknown": true,

        /**
         * 禁止使用未知属性
         * @see https://stylelint.io/user-guide/rules/property-no-unknown/
         */
        "property-no-unknown": true,

        /**
         * 禁止在 keyframe 声明中使用 !important
         * @see https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
         */
        "keyframe-declaration-no-important": true,

        /**
         * 在声明的块中中禁止出现重复的属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
         */
        "declaration-block-no-duplicate-properties": true,

        /**
         * 禁止缩写属性覆盖相关普通写法属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
         */
        "declaration-block-no-shorthand-property-overrides": true,

        /**
         * 禁止出现空块
         * @see https://stylelint.io/user-guide/rules/block-no-empty/
         */
        "block-no-empty": [true, {"severity": "warning"}],

        /**
         * 禁止使用未知的伪类选择器
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
         */
        "selector-pseudo-class-no-unknown": true,

        /**
         * 禁止使用未知的伪元素
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
         */
        "selector-pseudo-element-no-unknown": true,

        /**
         * 禁用未知的类型选择器
         * @see https://stylelint.io/user-guide/rules/selector-type-no-unknown/
         */
        "selector-type-no-unknown": true,

        /**
         * 禁止使用未知的 media 特性名称
         * @see https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
         */
        "media-feature-name-no-unknown": true,

        /**
         * 禁止使用未知的 at 规则
         * @see https://stylelint.io/user-guide/rules/at-rule-no-unknown/
         */
        "at-rule-no-unknown": true,

        /**
         * 禁止空注释
         * @see https://stylelint.io/user-guide/rules/comment-no-empty/
         */
        "comment-no-empty": true,

        /**
         * 禁止低优先级的选择器出现在高优先级的选择器之后
         * @see https://stylelint.io/user-guide/rules/no-descending-specificity/
         */
        "no-descending-specificity": true,

        /**
         * 禁止重复的 `@import` 规则
         * @see https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
         */
        "no-duplicate-at-import-rules": true,

        /**
         * 禁止重复的选择器
         * @see https://stylelint.io/user-guide/rules/no-duplicate-selectors/
         */
        "no-duplicate-selectors": true,

        /**
         * 禁止空白源文件
         * @see https://stylelint.io/user-guide/rules/no-empty-source/
         */
        "no-empty-source": true,

        /**
         * 禁止多余的分号
         * @see https://stylelint.io/user-guide/rules/no-extra-semicolons/
         */
        "no-extra-semicolons": true,

        /**
         * 禁用 CSS 不支持的双斜线注释
         * @see https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
         */
        "no-invalid-double-slash-comments": true
    }
};
