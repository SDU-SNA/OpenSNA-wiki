# 快速开始

本指南将帮助你快速开始使用 OpenSNA。

## 安装

### 使用 pip 安装

```bash
pip install opensna
```

### 从源码安装

```bash
git clone https://github.com/SDU-SNA/OpenSNA-wiki.git
cd opensna
pip install -e .
```

## 基本使用

### 创建网络

```python
import opensna as sna

# 创建一个空网络
G = sna.Graph()

# 添加节点
G.add_node(1)
G.add_node(2)
G.add_node(3)

# 添加边
G.add_edge(1, 2)
G.add_edge(2, 3)
G.add_edge(3, 1)
```

### 网络分析

```python
# 计算度中心性
degree_centrality = sna.degree_centrality(G)
print(degree_centrality)

# 计算介数中心性
betweenness_centrality = sna.betweenness_centrality(G)
print(betweenness_centrality)

# 社区发现
communities = sna.community_detection(G)
print(communities)
```

### 可视化

```python
# 可视化网络
sna.draw(G, with_labels=True)
```

## 下一步

- 查看 [API 文档](/api/) 了解更多功能
- 浏览示例代码学习高级用法
