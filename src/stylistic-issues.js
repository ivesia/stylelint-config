/**
 * Stylistic issues
 */

module.exports = {
    "rules": {
        /**
         * 十六进制颜色大写
         * @see https://stylelint.io/user-guide/rules/color-hex-case/
         */
        "color-hex-case": "upper",

        /**
         * 十六进制颜色使用缩写
         * @see https://stylelint.io/user-guide/rules/color-hex-length/
         */
        "color-hex-length": "short",

        /**
         * 字体名称需要使用引号引起来
         * @see https://stylelint.io/user-guide/rules/font-family-name-quotes/
         */
        "font-family-name-quotes": "always-where-recommended",

        /**
         * `font-weight` 的值尽量使用关键字
         * @see https://stylelint.io/user-guide/rules/font-weight-notation/
         */
        "font-weight-notation": "named-where-possible",

        /**
         * 多行情况下，函数的逗号后添加换行
         * @see https://stylelint.io/user-guide/rules/function-comma-newline-after/
         */
        "function-comma-newline-after": "always-multi-line",

        /**
         * 函数的逗号前禁止换行
         * @see https://stylelint.io/user-guide/rules/function-comma-newline-before/
         */
        "function-comma-newline-before": "never-multi-line",

        /**
         * 函数的逗号后添加空格
         * @see https://stylelint.io/user-guide/rules/function-comma-space-after/
         */
        "function-comma-space-after": "always",

        /**
         * 函数的逗号前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/function-comma-space-before/
         */
        "function-comma-space-before": "never",

        /**
         * 函数中相邻的空行数量
         * @see https://stylelint.io/user-guide/rules/function-max-empty-lines/
         */
        "function-max-empty-lines": 0,

        /**
         * 函数名大小写
         * @see https://stylelint.io/user-guide/rules/function-name-case/
         */
        "function-name-case": "lower",

        /**
         * 多行情况下，函数的括号需要添加换行
         * @see https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
         */
        "function-parentheses-newline-inside": "always-multi-line",

        /**
         * 函数的括号内禁止空格
         * @see https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
         */
        "function-parentheses-space-inside": "never",

        /**
         * Url 必须使用引号
         * @see https://stylelint.io/user-guide/rules/function-url-quotes/
         */
        "function-url-quotes": "always",

        /**
         * 在函数之后必须添加空格
         * @see https://stylelint.io/user-guide/rules/function-whitespace-after/
         */
        "function-whitespace-after": "always",

        /**
         * 小数必须添加前导 0
         * @see https://stylelint.io/user-guide/rules/number-leading-zero/
         */
        "number-leading-zero": "always",

        /**
         * 禁止数字中的拖尾 0
         * @see https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
         */
        "number-no-trailing-zeros": true,

        /**
         * 引号样式
         * @see https://stylelint.io/user-guide/rules/string-quotes/
         */
        "string-quotes": "double",

        /**
         * 长度为0时，禁止使用单位
         * @see https://stylelint.io/user-guide/rules/length-zero-no-unit/
         */
        "length-zero-no-unit": true,

        /**
         * 单位大小写
         * @see https://stylelint.io/user-guide/rules/unit-case/
         */
        "unit-case": "lower",

        /**
         * 关键字值的大小写
         * @see https://stylelint.io/user-guide/rules/value-keyword-case/
         */
        "value-keyword-case": "lower",

        /**
         * 多行情况下，值的逗号后添加换行
         * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
         */
        "value-list-comma-newline-after": "always-multi-line",

        /**
         * 值的逗号前禁止添加换行
         * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
         */
        "value-list-comma-newline-before": "never-multi-line",

        /**
         * 值的逗号后必须添加空格
         * @see https://stylelint.io/user-guide/rules/value-list-comma-space-after/
         */
        "value-list-comma-space-after": "always",

        /**
         * 值的逗号前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/value-list-comma-space-before/
         */
        "value-list-comma-space-before": "never",

        /**
         * 值列表中相邻空行数量
         * @see https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
         */
        "value-list-max-empty-lines": 0,

        /**
         * 在自定义属性前添加空行
         * @see https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
         */
        "custom-property-empty-line-before": "always",

        /**
         * 属性大小写
         * @see https://stylelint.io/user-guide/rules/property-case/
         */
        "property-case": "lower",

        /**
         * 在感叹号之后禁止空格
         * @see https://stylelint.io/user-guide/rules/declaration-bang-space-after/
         */
        "declaration-bang-space-after": "never",

        /**
         * 在感叹号之前添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-bang-space-before/
         */
        "declaration-bang-space-before": "always",

        /**
         * 在冒号之后添加换行
         * @see https://stylelint.io/user-guide/rules/declaration-colon-newline-after/
         */
        // "declaration-colon-newline-after": "never",

        /**
         * 在冒号之后添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-colon-space-after/
         */
        "declaration-colon-space-after": "always",

        /**
         * 在冒号之前添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-colon-space-before/
         */
        "declaration-colon-space-before": "never",

        /**
         * 禁止在声明语句之前有空行
         * @see https://stylelint.io/user-guide/rules/declaration-empty-line-before/
         */
        "declaration-empty-line-before": "never",

        /**
         * 分号之后必须有一个换行
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
         */
        "declaration-block-semicolon-newline-after": "always",

        /**
         * 分号之前必须有一个换行
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
         */
        "declaration-block-semicolon-newline-before": "never-multi-line",

        /**
         * 单行声明分号之后必须有空格
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
         */
        "declaration-block-semicolon-space-after": "always-single-line",

        /**
         * 单行声明分号之前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
         */
        "declaration-block-semicolon-space-before": "never",

        /**
         * 必须有拖尾分号
         * @see https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
         */
        "declaration-block-trailing-semicolon": "always",

        /**
         * 禁止在闭括号之前有空行
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
         */
        "block-closing-brace-empty-line-before": "never",

        /**
         * 闭括号之后要求有一个换行符
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
         */
        "block-closing-brace-newline-after": ["always", {ignoreAtRules: ["if", "else"]}],

        /**
         * 闭括号之前要求有一个换行符
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
         */
        "block-closing-brace-newline-before": "always",

        /**
         * 在闭括号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-after/
         */
        // "block-closing-brace-space-after": "never",

        /**
         * 在闭括号之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
         */
        // "block-closing-brace-space-before": "never",

        /**
         * 在开括号之后要求有一个换行
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
         */
        "block-opening-brace-newline-after": "always",

        /**
         * 在开括号之前要求有一个换行
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/
         */
        // "block-opening-brace-newline-before": "never-multi-line",

        /**
         * 在开括号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
         */
        // "block-opening-brace-space-after": "always",

        /**
         * 在开括号之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
         */
        "block-opening-brace-space-before": "always",

        /**
         * 属性选择器的方括号内禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
         */
        "selector-attribute-brackets-space-inside": "never",

        /**
         * 属性选择器的操作符之后禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
         */
        "selector-attribute-operator-space-after": "never",

        /**
         * 属性选择器的操作符之前禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
         */
        "selector-attribute-operator-space-before": "never",

        /**
         * 属性选择器的引号
         * @see https://stylelint.io/user-guide/rules/selector-attribute-quotes/
         */
        "selector-attribute-quotes": "always",

        /**
         *  关系选择器之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/selector-combinator-space-after/
         */
        "selector-combinator-space-after": "always",

        /**
         *  关系选择器之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/selector-combinator-space-before/
         */
        "selector-combinator-space-before": "always",

        /**
         *  禁止包含选择符出现非空格字符
         * @see https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
         */
        "selector-descendant-combinator-no-non-space": true,

        /**
         * 伪类选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
         */
        "selector-pseudo-class-case": "lower",

        /**
         * 在伪类选择器的括号内禁止有空格。
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
         */
        "selector-pseudo-class-parentheses-space-inside": "never",

        /**
         * 伪元素选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
         */
        "selector-pseudo-element-case": "lower",

        /**
         * 伪元素选择器使用双冒号
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
         */
        "selector-pseudo-element-colon-notation": "double",

        /**
         * 类型选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-type-case/
         */
        "selector-type-case": "lower",

        /**
         * 选择器列表的逗号之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
         */
        "selector-list-comma-newline-after": "always-multi-line",

        /**
         * 选择器列表的逗号之前禁止换行符
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
         */
        "selector-list-comma-newline-before": "never-multi-line",

        /**
         * 单行模式，选择器列表的逗号后必须添加空格
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
         */
        "selector-list-comma-space-after": "always-single-line",

        /**
         * 选择器列表的逗号之前禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
         */
        "selector-list-comma-space-before": "never",

        /**
         * 规则之前的空行
         * @see https://stylelint.io/user-guide/rules/rule-empty-line-before/
         */
        "rule-empty-line-before": ["always-multi-line", {except: ["after-single-line-comment", "first-nested"]}],

        /**
         * 在 media 特性中的冒号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
         */
        "media-feature-colon-space-after": "always",

        /**
         *  在 media 特性中的冒号之前禁止空格
         * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
         */
        "media-feature-colon-space-before": "never",

        /**
         *  media 特性名称的大小写
         * @see https://stylelint.io/user-guide/rules/media-feature-name-case/
         */
        "media-feature-name-case": "lower",

        /**
         * media 特性的括号内禁止有空格
         * @see https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
         */
        "media-feature-parentheses-space-inside": "never",

        /**
         * media 特性的范围操作符之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
         */
        "media-feature-range-operator-space-after": "always",

        /**
         * media 特性的范围操作符之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
         */
        "media-feature-range-operator-space-before": "always",

        /**
         * 媒体查询的逗号之后的换行
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
         */
        "media-query-list-comma-newline-after": "always-multi-line",

        /**
         * 媒体查询的逗号之前的换行
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
         */
        "media-query-list-comma-newline-before": "never-multi-line",

        /**
         * 媒体查询的逗号之后的空格
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
         */
        "media-query-list-comma-space-after": "always-single-line",

        /**
         * 媒体查询的逗号之前的空格
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
         */
        "media-query-list-comma-space-before": "never",

        /**
         * at 规则之前有空行
         * @see https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
         */
        "at-rule-empty-line-before": "always",

        /**
         * at 规则的大小写
         * @see https://stylelint.io/user-guide/rules/at-rule-name-case/
         */
        "at-rule-name-case": "lower",

        /**
         * 多行模式下，at 规则之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/at-rule-name-newline-after/
         */
        "at-rule-name-newline-after": "always-multi-line",

        /**
         * at 规则之后有一个空格
         * @see https://stylelint.io/user-guide/rules/at-rule-name-space-after/
         */
        "at-rule-name-space-after": "always",

        /**
         * at 规则的分号之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
         */
        "at-rule-semicolon-newline-after": "always",

        /**
         * at 规则的分号之前的空格
         * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/
         */
        "at-rule-semicolon-space-before": "never",

        /**
         * 注释之前有空行
         * @see https://stylelint.io/user-guide/rules/comment-empty-line-before/
         */
        "comment-empty-line-before": "always",

        /**
         * 注释标签内有空白
         * @see https://stylelint.io/user-guide/rules/comment-whitespace-inside/
         */
        "comment-whitespace-inside": "always",

        /**
         * 缩进
         * @see https://stylelint.io/user-guide/rules/indentation/
         */
        "indentation": 4,

        /**
         * 换行符
         * @see https://stylelint.io/user-guide/rules/linebreaks/
         */
        "linebreaks": "unix",

        /**
         * 空行数量
         * @see https://stylelint.io/user-guide/rules/max-empty-lines/
         */
        "max-empty-lines": 2,

        /**
         * 一行的最大字数
         * @see https://stylelint.io/user-guide/rules/max-line-length/
         */
        "max-line-length": 120,

        /**
         * 行尾空白符
         * @see https://stylelint.io/user-guide/rules/no-eol-whitespace/
         */
        "no-eol-whitespace": true,

        /**
         * 文件默认换行
         * @see https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
         */
        "no-missing-end-of-source-newline": true,

        /**
         * 禁止第一行空行
         * @see https://stylelint.io/user-guide/rules/no-empty-first-line/
         */
        "no-empty-first-line": true
    }
};
