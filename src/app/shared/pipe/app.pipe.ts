import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'failureLevesShow',
})

export class FailureLevesShowPipe implements PipeTransform {
  transform(value: number): any {
    if (value === 1) {
      return '一级';
    } else if (value === 2) {
      return '二级';
    } else if (value === 3) {
      return '三级';
    } else if (value === 4) {
      return '四级';
    } else {
      return '--';
    }
  }
}
@Pipe({
  name: 'statusShow'
})
export class StatusShowPipe implements PipeTransform {
  transform(value: number): any {
    if (value === 0) {
      return '待受理';
    } else if (value === 1) {
      return '已受理';
    } else if (value === 2) {
      return '已完成';
    } else {
      return '--';
    }
  }
}

@Pipe({
  name: 'startOrProhibitShow'
})
export class StartOrProhibitShowPipe implements PipeTransform {
  transform(value: number): any {
    if (value === 0) {
      return '禁用';
    } else if (value === 1) {
      return '启用';
    } else {
      return '--';
    }
  }
}


@Pipe({
  name: 'versionShow'
})
export class VersionShowPipe implements PipeTransform {
  transform(value: number): any {
    if (value === 1) {
      return '3.3';
    } else if (value === 2) {
      return '3.4';
    } else if (value === 3) {
      return '3.5';
    } else {
      return '--';
    }
  }
}



@Pipe({
  name: 'depPatternShow'
})
export class DepPatternShowPipe implements PipeTransform {
  transform(value: number): any {
    if (value === 1) {
      return '服务器（默认）';
    } else if (value === 2) {
      return '嵌入式（通过Java程序）';
    } else {
      return '--';
    }
  }
}


@Pipe({
  name: 'problemTypeShow'
})
export class ProblemTypeShowPipe implements PipeTransform {
  transform(value: number, level: number): any {
    if (level === 1) {
      if (value === 1) {
        return '数据损坏';
      } else if (value === 2) {
        return '系统无法远程连接';
      } else if (value === 3) {
        return '系统无法进行操作';
      } else if (value === 4) {
        return '文档中罗列的重要功能不可用';
      } else if (value === 5) {
        return '系统无限期宕机，导致资源或响应无法接受或无限期延迟';
      } else if (value === 6) {
        return '系统崩溃，并在重新启动尝试后重复崩溃';
      } else if (value === 7) {
        return '关键数据丢失，无法恢复';
      } else if (value === 8) {
        return '导致大面积的实时业务中断';
      } else if (value === 9) {
        return '暂无修复方案的 Bug';
      } else {
        return '--';
      }
    } else if (level === 2) {
      if (value === 1) {
        return '已知有修复方案的Bug';
      } else if (value === 2) {
        return '第三方应用导致的故障';
      } else if (value === 3) {
        return 'GC引起的故障';
      } else {
        return '--';
      }
    } else if (level === 3) {
      if (value === 1) {
        return '应用开发指导，譬如 Cypher 语句优化指导';
      } else if (value === 2) {
        return '功能改进';
      } else if (value === 3) {
        return '运维管理相关的故障，譬如生成新账户';
      } else {
        return '--';
      }
    } else {
      return '--';
    }

  }
}




