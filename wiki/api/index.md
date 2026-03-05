# API 参考

OpenSNA API 文档概览。

## 核心模块

### Graph

图数据结构的基础类。

```python
import opensna as sna

G = sna.Graph()
```

### 中心性算法

计算网络中节点的重要性。

- `degree_centrality()` - 度中心性
- `betweenness_centrality()` - 介数中心性
- `closeness_centrality()` - 接近中心性
- `eigenvector_centrality()` - 特征向量中心性

### 社区发现

识别网络中的社区结构。

- `community_detection()` - 社区发现
- `modularity()` - 模块度计算

### 可视化

网络可视化工具。

- `draw()` - 绘制网络图
- `draw_spring()` - 弹簧布局
- `draw_circular()` - 环形布局

## 使用示例

详细的使用示例请参考 [快速开始](/guide/getting-started) 页面。

## API 详细文档

完整的 API 文档正在完善中，敬请期待。
