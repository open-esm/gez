---
titleSuffix: Высокопроизводительный движок сборки Gez
description: Подробный анализ системы сборки Rspack в фреймворке Gez, включая высокопроизводительную компиляцию, сборку для нескольких сред, оптимизацию ресурсов и другие ключевые функции, которые помогают разработчикам создавать эффективные и надежные современные веб-приложения.
head:
  - - meta
    - property: keywords
      content: Gez, Rspack, система сборки, высокопроизводительная компиляция, горячая перезагрузка, сборка для нескольких сред, Tree Shaking, разделение кода, SSR, оптимизация ресурсов, эффективность разработки, инструменты сборки
---

# Rspack

Gez реализован на основе системы сборки [Rspack](https://rspack.dev/), которая обеспечивает высокую производительность сборки. В этом документе описаны роль и ключевые функции Rspack в фреймворке Gez.

## Особенности

Rspack является основной системой сборки фреймворка Gez и предоставляет следующие ключевые функции:

- **Высокая производительность сборки**: Движок сборки, реализованный на Rust, обеспечивает высокую скорость компиляции, что значительно ускоряет сборку крупных проектов.
- **Оптимизация опыта разработки**: Поддержка горячей перезагрузки (HMR), инкрементальной компиляции и других современных функций разработки, обеспечивая плавный процесс разработки.
- **Сборка для нескольких сред**: Унифицированная конфигурация сборки поддерживает клиентскую (client), серверную (server) и Node.js (node) среды, упрощая процесс разработки для нескольких платформ.
- **Оптимизация ресурсов**: Встроенные возможности обработки и оптимизации ресурсов, включая разделение кода, Tree Shaking, сжатие ресурсов и другие функции.

## Сборка приложения

Система сборки Rspack в Gez имеет модульную архитектуру и включает следующие основные модули:

### @gez/rspack

Базовый модуль сборки, предоставляющий следующие ключевые возможности:

- **Унифицированная конфигурация сборки**: Стандартизированное управление конфигурацией сборки с поддержкой конфигурации для нескольких сред.
- **Обработка ресурсов**: Встроенная поддержка обработки TypeScript, CSS, изображений и других ресурсов.
- **Оптимизация сборки**: Функции оптимизации производительности, такие как разделение кода и Tree Shaking.
- **Сервер разработки**: Интеграция высокопроизводительного сервера разработки с поддержкой HMR.

### @gez/rspack-vue

Специализированный модуль сборки для фреймворка Vue, предоставляющий:

- **Компиляция компонентов Vue**: Поддержка эффективной компиляции компонентов Vue 2/3.
- **Оптимизация SSR**: Специальная оптимизация для сценариев серверного рендеринга.
- **Улучшения для разработки**: Улучшения для среды разработки Vue.

## Процесс сборки

Процесс сборки в Gez состоит из следующих этапов:

1. **Инициализация конфигурации**
   - Загрузка конфигурации проекта
   - Объединение конфигурации по умолчанию и пользовательской конфигурации
   - Настройка конфигурации в зависимости от переменных окружения

2. **Компиляция ресурсов**
   - Анализ зависимостей исходного кода
   - Преобразование различных ресурсов (TypeScript, CSS и т.д.)
   - Обработка импорта и экспорта модулей

3. **Оптимизация**
   - Выполнение разделения кода
   - Применение Tree Shaking
   - Сжатие кода и ресурсов

4. **Генерация выходных данных**
   - Генерация целевых файлов
   - Создание карты ресурсов
   - Генерация отчета о сборке

## Лучшие практики

### Оптимизация среды разработки

- **Конфигурация инкрементальной компиляции**: Правильная настройка параметра `cache` для ускорения сборки за счет использования кэша.
- **Оптимизация HMR**: Целевая настройка области действия горячей перезагрузки для избежания ненужных обновлений модулей.
- **Оптимизация обработки ресурсов**: Использование подходящих конфигураций loader для избежания повторной обработки.

### Оптимизация производственной среды

- **Стратегия разделения кода**: Правильная настройка `splitChunks` для оптимизации загрузки ресурсов.
- **Сжатие ресурсов**: Включение подходящих настроек сжатия для баланса между временем сборки и размером выходных данных.
- **Оптимизация кэша**: Использование хэшей содержимого и стратегий долгосрочного кэширования для повышения производительности загрузки.

## Пример конфигурации

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    async devApp(gez) {
        return import('@gez/rspack').then((m) =>
            m.createRspackHtmlApp(gez, {
                // Пользовательская конфигурация сборки
                config({ config }) {
                    // Добавьте пользовательскую конфигурацию Rspack здесь
                }
            })
        );
    },
} satisfies GezOptions;
```

::: tip
Для получения более подробной информации о API и параметрах конфигурации, обратитесь к [документации Rspack API](/api/app/rspack.html).
:::